export const name="phishing";
export const id="dl_a0a50b47924a053a5158";
export const url=new URL("../icons/phishing.svg?v=5ddfd5af0634a5f04ce0f6cc4c722a86fae74eea07f1cda427134ca906cba876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
