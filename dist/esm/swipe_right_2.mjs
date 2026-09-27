export const name="swipe_right_2";
export const id="dl_53df468979c5dd1d69ad";
export const url=new URL("../icons/swipe_right_2.svg?v=e84e5656b54718cb844dede594dd18324d4bad239d62a59bbd9b248d35efe610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
