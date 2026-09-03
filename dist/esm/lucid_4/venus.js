export const name="venus";
export const id="dl_a5f5f6f474f848e2b465";
export const url=new URL("../../icons/lucid_4/venus.svg?v=e62430f2035810e3e8b08d16e3d16b9612439eec0b002cfd7779dce4196bc66a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
