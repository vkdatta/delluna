export const name="ticket-thin";
export const id="dl_2e93f7c748e745449181";
export const url=new URL("../icons/T/ticket-thin.svg?v=0a742afc6b809d47c7af848c57bb3ac7a7993cada7e94a3c8d57d49e9ddd1418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
