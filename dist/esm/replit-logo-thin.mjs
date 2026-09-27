export const name="replit-logo-thin";
export const id="dl_b1a51990440a4ee7b0dc";
export const url=new URL("../icons/replit-logo-thin.svg?v=97607484f3a6bf08356a39ab424ba4f1daca98e716cede7f2aeb894b4eb919d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
