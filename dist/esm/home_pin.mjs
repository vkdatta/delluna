export const name="home_pin";
export const id="dl_a54b18d6427f4f96aece";
export const url=new URL("../icons/home_pin.svg?v=e44d908302c636111a8d61b33f366aeb67f08c914a19ad85328c721566968d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
