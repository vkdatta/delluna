export const name="fan-light";
export const id="dl_b304a558ac9f40809b07";
export const url=new URL("../icons/fan-light.svg?v=e476f6cc7c9cc40a1c393945d38a5c7c0baa4ae4488f5580fed961f3535c0bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
