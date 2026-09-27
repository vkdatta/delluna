export const name="line_start_arrow";
export const id="dl_6ef0c5e0e0455b713601";
export const url=new URL("../icons/line_start_arrow.svg?v=c8f54826abdbdbafc58df9c074c46f0971a83b3e5b23b11e80cf00c04e44b7fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
