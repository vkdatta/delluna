export const name="caret-circle-up-down-light";
export const id="dl_f46bfa9bff9b4c1287d7";
export const url=new URL("../icons/caret-circle-up-down-light.svg?v=d1b7a54e36cd3b082752dde58cad985af973b747ee7422bfa73e59982ef4a922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
