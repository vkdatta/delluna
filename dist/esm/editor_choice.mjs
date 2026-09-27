export const name="editor_choice";
export const id="dl_19a57dc2f99a5ff2ba8c";
export const url=new URL("../icons/editor_choice.svg?v=4f50c66219936d8e7bf92fddcdb9b47a16342875c58efdb7255108ff66987bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
