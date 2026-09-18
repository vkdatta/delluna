export const name="mobile_question";
export const id="dl_87c62e786a1b4097b6e2";
export const url=new URL("../icons/M/mobile_question.svg?v=6ddf76e6013854db6eaf7e4fc4c5a4ce9121f350fef8acbf8ceee82f31bf037d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
