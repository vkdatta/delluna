export const name="mouse-right-click";
export const id="dl_557fba0e024744a79df3";
export const url=new URL("../icons/mouse-right-click.svg?v=94748063511735bff11809c8e55fcc086f490a1ef2f4fbd4738c9ca865928932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
