export const name="lucid_1-clipboard-minus";
export const id="dl_070dfe107d71405a80f1";
export const url=new URL("../icons/lucid_1-clipboard-minus.svg?v=9efaec99cc361a159e6c803cacf007e9e6eb8bed3cbd06eea9ef283bbb79de47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
