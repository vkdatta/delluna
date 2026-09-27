export const name="airwave-fill";
export const id="dl_f694de4d111d092d1ae3";
export const url=new URL("../icons/airwave-fill.svg?v=42626c2defa831a4ddfd5a49b0656eeb9836a41f5582c0042aff43b17d7a30dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
