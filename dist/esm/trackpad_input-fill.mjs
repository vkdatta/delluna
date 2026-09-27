export const name="trackpad_input-fill";
export const id="dl_488eeef882f749d3b289";
export const url=new URL("../icons/trackpad_input-fill.svg?v=9a5c56d99cb66a26060bce2164d42e34e211e8a2f2c97dac59bbc8441014e9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
