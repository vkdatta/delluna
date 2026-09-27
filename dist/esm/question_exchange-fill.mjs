export const name="question_exchange-fill";
export const id="dl_542753d4bcc61482ddfa";
export const url=new URL("../icons/question_exchange-fill.svg?v=bb08f41490af05d5845937bea8f554ce598d8ef3468a5844145e7005895ca44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
