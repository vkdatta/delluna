export const name="funnel-simple";
export const id="dl_82e1f8e135524df382fc";
export const url=new URL("../icons/funnel-simple.svg?v=05eadf49635cfbaa6b794c21af9a7b7300434921644de45000f8a14b36a57c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
