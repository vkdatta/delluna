export const name="lucid_3-message-square-reply";
export const id="dl_60c744a24be54f73a220";
export const url=new URL("../icons/lucid_3-message-square-reply.svg?v=5815b4bea95eda377d58db54292cc4c42a65f232e5f2ccafdd4db81592fe5c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
