export const name="hamburger";
export const id="dl_ecaaf65177f64dd8b4e9";
export const url=new URL("../../icons/H/hamburger.svg?v=ef7d55fdae94eee9082f99ef7ffc7f5933ac0169180ba994b5617bcf9e7238db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
