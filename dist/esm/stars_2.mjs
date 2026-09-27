export const name="stars_2";
export const id="dl_e0d2c69188c940e9c601";
export const url=new URL("../icons/stars_2.svg?v=face0e265ab42390a3e2d0c8722ff39153c4186699a1a7378f4cd554bc2c3a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
