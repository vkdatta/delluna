export const name="lucid_1-bot-message-square";
export const id="dl_427de9f91a174671b976";
export const url=new URL("../icons/lucid_1-bot-message-square.svg?v=5362f298de2e3a4f2c9d8363a5a98ec1cf8e4fdddae66241fba785882614efc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
