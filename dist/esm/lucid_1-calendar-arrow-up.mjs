export const name="lucid_1-calendar-arrow-up";
export const id="dl_f93406c9db864f30ae18";
export const url=new URL("../icons/lucid_1-calendar-arrow-up.svg?v=6eb0a7e911ef1f36ca0fac22fa0dc650ba0f1505b5679b08d94c6545aa2ac7b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
