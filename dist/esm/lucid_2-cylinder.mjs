export const name="lucid_2-cylinder";
export const id="dl_679f15cd08e849749494";
export const url=new URL("../icons/lucid_2-cylinder.svg?v=606c4d47814705b1d5f2c8e2fb5c5edf0c7edeb757f535655dd10598dadc6dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
