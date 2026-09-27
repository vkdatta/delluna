export const name="lucid_2-headset";
export const id="dl_a7567e94afbb4daca79b";
export const url=new URL("../icons/lucid_2-headset.svg?v=4ee379e93986dd0d04a7cb0931bded9ea4c7bf6bc3c152536fbc99ed7e164811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
