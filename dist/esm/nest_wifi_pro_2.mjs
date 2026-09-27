export const name="nest_wifi_pro_2";
export const id="dl_e242d45f9158e57d56c4";
export const url=new URL("../icons/nest_wifi_pro_2.svg?v=c173b91dcb797a9b4906d194a397d3151a7abd0408ef2c9e9ec1d6bb3b4f5328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
