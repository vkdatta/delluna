export const name="escalator-up-thin";
export const id="dl_2751cc0e30a146969985";
export const url=new URL("../icons/escalator-up-thin.svg?v=c90698135c658d2eb2b30e07b6bfd88206eec01a56fab08cea58c7b2d6ef30d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
