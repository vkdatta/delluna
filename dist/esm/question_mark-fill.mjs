export const name="question_mark-fill";
export const id="dl_96ef083607d690d462de";
export const url=new URL("../icons/question_mark-fill.svg?v=1cf69a07a65239856bce4a0bbbcab7535b711bc6d42942e115d1828a8c810289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
