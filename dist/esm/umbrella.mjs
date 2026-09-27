export const name="umbrella";
export const id="dl_267cc0ff6bca438eb6ef";
export const url=new URL("../icons/umbrella.svg?v=8d0d901ec54b499f775d3812d24487d6be7fc89987e2088acb8ecd938ae109ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
