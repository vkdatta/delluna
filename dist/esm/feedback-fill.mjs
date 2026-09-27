export const name="feedback-fill";
export const id="dl_f519d7e1d0712e54d664";
export const url=new URL("../icons/feedback-fill.svg?v=eadf1846e6624aa869690f04debf25bb24e8f1ce7ea8d01e882dfe325ead90c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
