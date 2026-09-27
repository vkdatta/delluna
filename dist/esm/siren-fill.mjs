export const name="siren-fill";
export const id="dl_292a6f36d2e75f10b867";
export const url=new URL("../icons/siren-fill.svg?v=141edae5ae78e2121e17cfbbc4d6bb968f21f263a9cd92c021585bbfb82bc692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
