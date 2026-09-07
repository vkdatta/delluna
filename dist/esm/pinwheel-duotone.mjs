export const name="pinwheel-duotone";
export const id="dl_b33c7ebe149443c19155";
export const url=new URL("../icons/pinwheel-duotone.svg?v=bdd38b6ff1e94b7837abd510e55d6bee1cfd14ea8078983344b7a9ebb0350b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
