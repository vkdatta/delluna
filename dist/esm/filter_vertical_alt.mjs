export const name="filter_vertical_alt";
export const id="dl_8abd2421f577377cd124";
export const url=new URL("../icons/filter_vertical_alt.svg?v=55a745e4a6dd14efbc23c9ba0015ddc527d78b29e4ebf5bec6dbe24c866a0bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
