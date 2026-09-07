export const name="user-circle-check-fill";
export const id="dl_03567d67abf34234ba51";
export const url=new URL("../icons/U/user-circle-check-fill.svg?v=2673904880dec1486b65fc8a082d31bdf53deca79d92e3041ab324b38026cee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
