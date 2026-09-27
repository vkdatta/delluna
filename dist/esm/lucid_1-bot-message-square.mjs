export const name="lucid_1-bot-message-square";
export const id="dl_427de9f91a174671b976";
export const url=new URL("../icons/lucid_1-bot-message-square.svg?v=8baab7db5586c3ee0f0d4ed559f481c2da445e7058dd52480695233c6fe22085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
