export const name="toilet-paper-light";
export const id="dl_b777ea7b394544a09928";
export const url=new URL("../icons/T/toilet-paper-light.svg?v=d892bec14a76009d76267b4f913e0c0ebcabe97fcb3220a9cd6ebf869ee9f819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
