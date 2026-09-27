export const name="youtube-logo";
export const id="dl_0a5099647dd829ec3fde";
export const url=new URL("../icons/youtube-logo.svg?v=44abcb918d0724825d89b43dc3d3172219bcee7becf120d1e3e8306c29e31a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
