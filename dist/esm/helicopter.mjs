export const name="helicopter";
export const id="dl_9e1606f6a34b4d828fe2";
export const url=new URL("../icons/H/helicopter.svg?v=8ecddc105a1a6896b04a720be20a60c5f4940dfe2af9774ba246f1e9a1a94410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
