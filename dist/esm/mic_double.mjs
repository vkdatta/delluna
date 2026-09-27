export const name="mic_double";
export const id="dl_c267616bb6b6ee7aa2f7";
export const url=new URL("../icons/mic_double.svg?v=e64acd409c601a65a92fbea225ec4da4a00ff03c5d0673d5638987fdaf127a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
