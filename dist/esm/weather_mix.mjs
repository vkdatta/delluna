export const name="weather_mix";
export const id="dl_9b3b7100bde745218b4a";
export const url=new URL("../icons/W/weather_mix.svg?v=972fbb42f8c2868cb88d0c00e1b7126bd00316e21815cb9137d44e34c602f53a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
