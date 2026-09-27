export const name="certificate-thin";
export const id="dl_55e6e9b365ba4f6ca326";
export const url=new URL("../icons/certificate-thin.svg?v=85783053b54d5bb37f85c31eaf6bca056ca64fe0db4786057a151bd514c8f38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
