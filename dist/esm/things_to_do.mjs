export const name="things_to_do";
export const id="dl_b6d0a9446b9d804c240f";
export const url=new URL("../icons/things_to_do.svg?v=57be727241df1eb7de42a9b8a5dc1df2c7c570d58a062ae671e3269f4c1f9c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
