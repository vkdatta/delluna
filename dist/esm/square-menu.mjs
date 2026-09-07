export const name="square-menu";
export const id="dl_38f3f36c38d14cfdb300";
export const url=new URL("../icons/square-menu.svg?v=347444a2924b6638204d09d2740cba00de7ffa2653d7ababab0bdbe106dde9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
