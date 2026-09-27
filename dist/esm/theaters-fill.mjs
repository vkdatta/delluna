export const name="theaters-fill";
export const id="dl_a819201f6756eb00f2e6";
export const url=new URL("../icons/theaters-fill.svg?v=fc95cad8cfd7334ad3d75f108c31ea767e7f3c7ac9c65e272f919bfb8f764bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
