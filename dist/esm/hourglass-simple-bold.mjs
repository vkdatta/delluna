export const name="hourglass-simple-bold";
export const id="dl_2aab7d8c8c7a4de296e7";
export const url=new URL("../icons/hourglass-simple-bold.svg?v=683b8faf81b838d83e8cf38be0d6061f0696ce05f70e531720b31a69549f673d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
