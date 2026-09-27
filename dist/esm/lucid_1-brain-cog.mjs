export const name="lucid_1-brain-cog";
export const id="dl_43f9fa71573e4461837a";
export const url=new URL("../icons/lucid_1-brain-cog.svg?v=b252823acc5e5104993d7be5319207cc424c8177fb32d44d97eec28efc61cd9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
