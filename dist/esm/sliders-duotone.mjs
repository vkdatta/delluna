export const name="sliders-duotone";
export const id="dl_9140b5ee8cbf4886bbb7";
export const url=new URL("../icons/S/sliders-duotone.svg?v=a6a14829ebaab84f08003b8fad99ed08048a99318bc6faabebb5bd0ff79633af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
