export const name="coffee-bean-fill";
export const id="dl_e82fe1f36de24b6aa7c9";
export const url=new URL("../icons/coffee-bean-fill.svg?v=d58a21c75d481d4b9e93172b4d8acc564b630c46c32cd366dea00fd7b6fd6f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
