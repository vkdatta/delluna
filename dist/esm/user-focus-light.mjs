export const name="user-focus-light";
export const id="dl_b5550b99c351e2924d9e";
export const url=new URL("../icons/user-focus-light.svg?v=fdf85b6dc9ebb5324fbeb03b9d6861e1c17ec0e4ef69a389a88e17ffc9b32bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
