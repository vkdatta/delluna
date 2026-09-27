export const name="question-mark-thin";
export const id="dl_8787b10891e4432fb561";
export const url=new URL("../icons/question-mark-thin.svg?v=d4079325547a2056563b5c4a4ad60966a02eec7835659454b5741fa6dbf93fa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
