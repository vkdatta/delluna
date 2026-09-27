export const name="highlighter-circle-bold";
export const id="dl_1577a9ca98cf4d1cbd07";
export const url=new URL("../icons/highlighter-circle-bold.svg?v=f87d3f17b4b6694980d63a706af2315e111f699d1ab74cc420eae6b98228ed75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
