export const name="swipe_right_2";
export const id="dl_43b290e9073b452ca905";
export const url=new URL("../icons/swipe_right_2.svg?v=7a58c0eb13f5916bf9236b5b8989d648c23b72680f793f740211be67f35d57f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
