export const name="speech_to_text_2";
export const id="dl_2d44354f799e4caab02e";
export const url=new URL("../icons/speech_to_text_2.svg?v=e508434df5e9d8e320496d41f879f718ef58bd8e0481121da027b376ade1ad8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
