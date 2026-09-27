export const name="warning-circle-thin";
export const id="dl_247a34afb931df423da5";
export const url=new URL("../icons/warning-circle-thin.svg?v=ca73be6d393341a57ea0025dd279081afcc978ae62e241764f09e801c7a7902e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
