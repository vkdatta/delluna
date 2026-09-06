export const name="lucid_3-message-square-off";
export const id="dl_f2c4ad56890948729606";
export const url=new URL("../icons/lucid_3-message-square-off.svg?v=618d1674f2bf3e08f62443c9adad332fb26e56a0622260afbafa10e94b782f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
