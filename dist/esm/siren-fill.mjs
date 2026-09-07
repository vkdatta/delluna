export const name="siren-fill";
export const id="dl_8bf52193ee324f4098b7";
export const url=new URL("../icons/S/siren-fill.svg?v=141edae5ae78e2121e17cfbbc4d6bb968f21f263a9cd92c021585bbfb82bc692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
