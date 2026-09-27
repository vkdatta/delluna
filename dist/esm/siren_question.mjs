export const name="siren_question";
export const id="dl_69d70c205e46129a052f";
export const url=new URL("../icons/siren_question.svg?v=13b53a980fdfeda6cf8685d450b5eadd994762d80730c4d825a2bbb29539ac13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
