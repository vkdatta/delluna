export const name="number-square-nine";
export const id="dl_7ffcfd2a76a148aeb939";
export const url=new URL("../icons/number-square-nine.svg?v=3e24d6efe6a877f990f62b5ce4366f4beef711c4e25c02d30523bf8e0b8134ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
