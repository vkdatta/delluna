export const name="circle_circle";
export const id="dl_5e81b4c1719e7fda68de";
export const url=new URL("../icons/circle_circle.svg?v=7f20cb9315fa590acb40a243588cb2ee6e2f95561c86ab4bdcff07761380612f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
